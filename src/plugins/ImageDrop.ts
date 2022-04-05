// @ts-ignore
import { ImageDrop as BaseImageDrop } from 'quill-image-drop-module';
export class ImageDrop extends BaseImageDrop {
    handlePaste(evt: any) {
        if (evt.clipboardData && evt.clipboardData.items && evt.clipboardData.items.length) {
            (this as any).readFiles(evt.clipboardData.items, (dataUrl: string) => {
                setTimeout(() => (this as any).insert(dataUrl), 0);
            });
        }
    }

    insert(dataUrl: string) {
        const self: any = this
        let imageContainer = self.quill.container.querySelector(".image-container")
        const wrapper = document.createElement('div')
        const button = document.createElement('button')
        const imageElm = document.createElement('img')
        wrapper.classList.add('editor__image-wrapper')
        wrapper.appendChild(imageElm)
        wrapper.appendChild(button)

        imageElm.classList.add('editor__image-wrapper--image')
        imageElm.src = dataUrl

        button.innerText = "x"
        button.classList.add('editor__image-wrapper--remove-button')
        button.onclick = () => {
            imageContainer.removeChild(wrapper)
        }
        if (!imageContainer) {
            imageContainer = document.createElement('div')
            imageContainer.classList.add('image-container')
            self.quill.container.appendChild(imageContainer)

        }
        imageContainer.appendChild(wrapper)

        if (!self.quill['images']) {
            self.quill['images'] = []

        }

        self.quill['images'].push(dataUrl)
    }

}