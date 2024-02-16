import { Packer, Document, Paragraph, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';

export function generateDocx(formData: { title: string; content: string }) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: formData.title,
            heading: HeadingLevel.TITLE,
          }),
          new Paragraph(formData.content),
        ],
      },
    ],
  });

  // Gera um blob do documento
  Packer.toBlob(doc).then((blob) => {
    // Usa o FileSaver para salvar o arquivo localmente
    saveAs(blob, "documento.docx");
  });
}
