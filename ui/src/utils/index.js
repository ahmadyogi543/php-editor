export function saveFile(value) {
  const filename = prompt('Simpan file sebagai', '');

  if (filename) {
    const blob = new Blob([value], {
      type: 'text/plain',
    });
    const a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  }
}
