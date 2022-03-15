// @ts-ignore
import { ImageDrop as BaseImageDrop } from 'quill-image-drop-module';

export class ImageDrop extends BaseImageDrop {
    images: string[] = []

    insert(dataUrl: string) {
        const self: any = this
        const imageElm = document.createElement('img')
        imageElm.style.height = '80px'
        imageElm.style.width = '80px'
        imageElm.src = dataUrl

        let imageContainer = self.quill.container.querySelector(".image-container")
        if (!imageContainer) {
            imageContainer = document.createElement('div')
            imageContainer.classList = ['image-container']

            self.quill.container.appendChild(imageContainer)
        }

        imageContainer.appendChild(imageElm)

        this.images.push(dataUrl)
    }
}
