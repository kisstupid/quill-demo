// @ts-ignore
import { ImageDrop as BaseImageDrop } from 'quill-image-drop-module';

export class ImageDrop extends BaseImageDrop {
    images: string[] = []

    insert(dataUrl: string) {
        const self: any = this
        const imageElm = document.createElement('img')

        imageElm.src = dataUrl

        let imageContainer = self.quill.container.querySelector(".image-container")
        if (!imageContainer) {
            imageContainer = document.createElement('div')
            imageContainer.classList = ['image-container']
            imageContainer.style.position = "absolute"
            imageContainer.style.bottom = "0"
            imageContainer.style.left = "0"
            imageContainer.style.right = "0"
            imageContainer.style.height = "100px"

            self.quill.container.style.paddingBottom = "100px"
            self.quill.container.appendChild(imageContainer)
        }

        imageContainer.appendChild(imageElm)

        this.images.push(dataUrl)
    }
}
