"use client"

import { useState, useEffect } from "react"
import { ImageAnnotator } from "@/components/annotate/image-annotator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, RotateCcw, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample images - in a real app, these would come from an API or file upload
const sampleImages = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
  "/images/img-6.jpg",
  "/images/img-7.jpg",
  "/images/img-8.jpg",
]

export default function AnnotatePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [annotations, setAnnotations] = useState<Record<number, any[]>>({})
  const { toast } = useToast()

  // Load annotations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("image-annotations")
    if (saved) {
      try {
        setAnnotations(JSON.parse(saved))
      } catch (error) {
        console.error("Failed to load annotations:", error)
      }
    }
  }, [])

  const saveAnnotations = () => {
    localStorage.setItem("image-annotations", JSON.stringify(annotations))
    toast({
      title: "Annotations Saved",
      description: "Your annotations have been saved successfully.",
    })
  }

  const clearCurrentAnnotations = () => {
    setAnnotations((prev) => ({
      ...prev,
      [currentImageIndex]: [],
    }))
    toast({
      title: "Annotations Cleared",
      description: "All annotations for this image have been cleared.",
    })
  }

  const handleAnnotationsChange = (newAnnotations: any[]) => {
    setAnnotations((prev) => ({
      ...prev,
      [currentImageIndex]: newAnnotations,
    }))
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sampleImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sampleImages.length) % sampleImages.length)
  }

  const currentAnnotations = annotations[currentImageIndex] || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Image Annotation</h1>
          <p className="text-muted-foreground">Draw polygons to annotate images</p>
        </div>

        <div className="flex gap-2">
          <Button onClick={clearCurrentAnnotations} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear
          </Button>
          <Button onClick={saveAnnotations}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Image Navigation */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between mb-4">
              <Button onClick={prevImage} variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">
                {currentImageIndex + 1} / {sampleImages.length}
              </span>
              <Button onClick={nextImage} variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {sampleImages.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {annotations[index]?.length > 0 && (
                    <div className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs px-1 rounded">
                      {annotations[index].length}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Annotation Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Image {currentImageIndex + 1}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {currentAnnotations.length} annotation{currentAnnotations.length !== 1 ? "s" : ""}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ImageAnnotator
                imageSrc={sampleImages[currentImageIndex]}
                annotations={currentAnnotations}
                onAnnotationsChange={handleAnnotationsChange}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            • <strong>Click</strong> on the image to start drawing a polygon
          </p>
          <p>
            • <strong>Continue clicking</strong> to add more points to the polygon
          </p>
          <p>
            • <strong>Double-click</strong> or click the first point again to complete the polygon
          </p>
          <p>
            • <strong>Click on a polygon</strong> to select and delete it
          </p>
          <p>• Use the navigation buttons or thumbnail grid to switch between images</p>
          <p>• Your annotations are automatically saved to localStorage</p>
        </CardContent>
      </Card>
    </div>
  )
}
