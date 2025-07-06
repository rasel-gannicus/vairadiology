"use client"

import type React from "react"

import { useRef, useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { Loader2 } from "lucide-react" 

interface Point {
  x: number
  y: number
}

interface Polygon {
  id: string
  points: Point[]
  completed: boolean
}

interface ImageAnnotatorProps {
  imageSrc: string
  annotations: Polygon[]
  onAnnotationsChange: (annotations: Polygon[]) => void
}

export function ImageAnnotator({ imageSrc, annotations, onAnnotationsChange }: ImageAnnotatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [currentPolygon, setCurrentPolygon] = useState<Polygon | null>(null)
  const [selectedPolygon, setSelectedPolygon] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reset states when image source changes
    setIsLoading(true)
    setImageLoaded(false)
    setCurrentPolygon(null)
    setSelectedPolygon(null)
  }, [imageSrc])

  useEffect(() => {
    const image = imageRef.current
    if (!image) return

    const handleImageLoad = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      // Calculate canvas size maintaining aspect ratio
      const maxWidth = 800
      const maxHeight = 600
      const aspectRatio = image.naturalWidth / image.naturalHeight

      let width = maxWidth
      let height = maxWidth / aspectRatio

      if (height > maxHeight) {
        height = maxHeight
        width = maxHeight * aspectRatio
      }

      canvas.width = width
      canvas.height = height
      setCanvasSize({ width, height })
      setImageLoaded(true)
      setIsLoading(false) // Add this line
    }

    if (image.complete) {
      handleImageLoad()
    } else {
      image.addEventListener("load", handleImageLoad)
      return () => image.removeEventListener("load", handleImageLoad)
    }
  }, [imageSrc])

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const image = imageRef.current
    if (!canvas || !image || !imageLoaded) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw image
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    // Draw completed polygons
    annotations.forEach((polygon) => {
      if (polygon.points.length < 2) return

      ctx.beginPath()
      ctx.moveTo(polygon.points[0].x, polygon.points[0].y)

      for (let i = 1; i < polygon.points.length; i++) {
        ctx.lineTo(polygon.points[i].x, polygon.points[i].y)
      }

      if (polygon.completed) {
        ctx.closePath()
        ctx.fillStyle = selectedPolygon === polygon.id ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 123, 255, 0.3)"
        ctx.fill()
      }

      ctx.strokeStyle = selectedPolygon === polygon.id ? "#ff0000" : "#007bff"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw points
      polygon.points.forEach((point, index) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = index === 0 ? "#ff0000" : "#007bff"
        ctx.fill()
      })
    })

    // Draw current polygon being drawn
    if (currentPolygon && currentPolygon.points.length > 0) {
      ctx.beginPath()
      ctx.moveTo(currentPolygon.points[0].x, currentPolygon.points[0].y)

      for (let i = 1; i < currentPolygon.points.length; i++) {
        ctx.lineTo(currentPolygon.points[i].x, currentPolygon.points[i].y)
      }

      ctx.strokeStyle = "#28a745"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw points
      currentPolygon.points.forEach((point, index) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = index === 0 ? "#ff0000" : "#28a745"
        ctx.fill()
      })
    }
  }, [annotations, currentPolygon, selectedPolygon, imageLoaded])

  useEffect(() => {
    drawCanvas()
  }, [drawCanvas])

  const getCanvasCoordinates = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    }
  }

  const isPointNearFirstPoint = (point: Point, firstPoint: Point, threshold = 10) => {
    const distance = Math.sqrt(Math.pow(point.x - firstPoint.x, 2) + Math.pow(point.y - firstPoint.y, 2))
    return distance <= threshold
  }

  const isPointInPolygon = (point: Point, polygon: Polygon) => {
    if (!polygon.completed || polygon.points.length < 3) return false

    let inside = false
    const points = polygon.points

    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      if (
        points[i].y > point.y !== points[j].y > point.y &&
        point.x < ((points[j].x - points[i].x) * (point.y - points[i].y)) / (points[j].y - points[i].y) + points[i].x
      ) {
        inside = !inside
      }
    }

    return inside
  }

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const point = getCanvasCoordinates(event)

    // Check if clicking on an existing polygon
    const clickedPolygon = annotations.find((polygon) => isPointInPolygon(point, polygon))
    if (clickedPolygon) {
      setSelectedPolygon(selectedPolygon === clickedPolygon.id ? null : clickedPolygon.id)
      return
    }

    setSelectedPolygon(null)

    // If we're drawing a polygon
    if (currentPolygon) {
      const newPoints = [...currentPolygon.points, point]

      // Check if we're closing the polygon (clicking near first point)
      if (newPoints.length > 2 && isPointNearFirstPoint(point, newPoints[0])) {
        // Complete the polygon
        const completedPolygon: Polygon = {
          ...currentPolygon,
          completed: true,
        }
        onAnnotationsChange([...annotations, completedPolygon])
        setCurrentPolygon(null)
      } else {
        setCurrentPolygon({
          ...currentPolygon,
          points: newPoints,
        })
      }
    } else {
      // Start a new polygon
      setCurrentPolygon({
        id: crypto.randomUUID(),
        points: [point],
        completed: false,
      })
    }
  }

  const handleCanvasDoubleClick = () => {
    if (currentPolygon && currentPolygon.points.length >= 3) {
      const completedPolygon: Polygon = {
        ...currentPolygon,
        completed: true,
      }
      onAnnotationsChange([...annotations, completedPolygon])
      setCurrentPolygon(null)
    }
  }

  const deleteSelectedPolygon = () => {
    if (selectedPolygon) {
      onAnnotationsChange(annotations.filter((polygon) => polygon.id !== selectedPolygon))
      setSelectedPolygon(null)
    }
  }

  const cancelCurrentPolygon = () => {
    setCurrentPolygon(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {selectedPolygon && (
          <Button onClick={deleteSelectedPolygon} variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Selected
          </Button>
        )}
        {currentPolygon && (
          <Button onClick={cancelCurrentPolygon} variant="outline" size="sm">
            Cancel Drawing
          </Button>
        )}
      </div>

      <div className="relative inline-block w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        <img
          ref={imageRef}
          src={imageSrc}
          alt="Annotation target"
          className="hidden"
          crossOrigin="anonymous"
          onError={() => setIsLoading(false)}
        />
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onDoubleClick={handleCanvasDoubleClick}
          className="border border-border rounded-lg cursor-crosshair w-full"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>

      <div className="text-sm text-muted-foreground">
        {currentPolygon ? (
          <p>Drawing polygon... Click to add points, double-click or click first point to complete.</p>
        ) : (
          <p>Click on the image to start drawing a polygon. Click on existing polygons to select them.</p>
        )}
      </div>
    </div>
  )
}
