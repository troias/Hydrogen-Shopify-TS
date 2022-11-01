import { Image, Link, Video } from '@shopify/hydrogen'
import type { Media } from '@shopify/hydrogen/storefront-api-types'

interface SpreadMediaProps {
    data: Media
    loading?: HTMLImageElement['loading']
    scale?: 2 | 3
    sizes: string
    width: number
    widths: number[]
}

export function SpreadMedia({
    data,
    loading,
    scale,
    sizes,
    width,
    widths,
}: SpreadMediaProps) {
    if (data.mediaContentType === 'VIDEO') {
        return (
            <Video
          previewImageOptions= {{ scale, src: data.previewImage!.url }
    }
    width = { scale! * width}
    className = "block object-cover w-full h-full"
    data = { data }
    controls = { false}
    muted
    loop
    playsInline
    autoPlay
        />
      )
}

if (data.mediaContentType === 'IMAGE') {
    return (
        <Image
          widths= { widths }
    sizes = { sizes }
    alt = { data.alt || 'Marketing Banner Image' }
    className = "block object-cover w-full h-full"
    // @ts-ignore
    data = { data.image }
    loading = { loading }
    width = { width }
    loaderOptions = {{ scale, crop: 'center' }
}
/>
      )
    }


return null
  }



