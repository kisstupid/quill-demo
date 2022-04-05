// @ts-ignore
import Clipboard from 'quill/modules/clipboard'
import { Delta } from '@vueup/vue-quill';
import Quill from 'quill';

export class MClipboard extends Clipboard {
  onPaste(e: any) {
    const self = this as any
    console.log(e.clipboardData.files);

    if (e.defaultPrevented || !self.quill.isEnabled()) return;
    let range = self.quill.getSelection();
    let delta = new Delta().retain(range.index);
    let scrollTop = self.quill.scrollingContainer.scrollTop;
    self.container.focus();
    self.quill.selection.update(Quill.sources.SILENT);
    setTimeout(() => {
      delta = delta.concat(self.convert()).delete(range.length);
      self.quill.updateContents(delta, Quill.sources.USER);
      // range.length contributes to delta.length()
      self.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT);
      self.quill.scrollingContainer.scrollTop = scrollTop;
      self.quill.focus();
    }, 1);
  }
}