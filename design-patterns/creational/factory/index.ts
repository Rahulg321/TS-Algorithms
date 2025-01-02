interface CustomDocument{
    open(): void;
    save(): void;
}

class WordDocument implements CustomDocument{
    open(): void {
        console.log("opening  Word Document");
    }

    save(): void {
        console.log("saving Word Document");
    }
}


class PdfDocument implements CustomDocument{
    open(): void {
        console.log("opening  pdf Document");
    }

    save(): void {
        console.log("saving pdf Document");
    }
}



class DocumentFactory{
    createDocument(type:string):CustomDocument{
        switch(type){
            case "word":
                return new WordDocument();
            case "pdf":
                return new PdfDocument();
            default:
                throw new Error("Document type not supported");
        }
    }
}


const factory = new DocumentFactory()

const wordDocFactory = factory.createDocument("word");
const pdfDocFactory = factory.createDocument("pdf");


if(wordDocFactory instanceof WordDocument){
    wordDocFactory.open();
    wordDocFactory.save();
}

if(pdfDocFactory instanceof PdfDocument){
    pdfDocFactory.open();
    pdfDocFactory.save();
}
