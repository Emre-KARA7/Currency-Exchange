import reactNativeHTMP2PDF from 'react-native-html-to-pdf';

async function generateReceiptPDF(account, date, amount, type) {
  const options = {
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Example 1</title>
        <link rel="stylesheet" href="style.css" media="all" />
      </head>
      <body style="background-color: #f2f2f2;">
    <h1 style="color: #303F9F; font-size: 36px; text-align: center;">Dekont</h1>
    
    <table style="border-collapse: collapse; width: 100%; border: 1px solid black;">
      <tr>
        <td style="border-bottom: 1px solid gray; background-color: #f2f2f2;">
          <h2 style="color: #00796B;">Ödeme Bilgileri</h2>
        </td>
      </tr>
      <tr>
      <td style="padding: 10px 0px; background-color: #f9f9f9;">
        <p style="color: #00796B; font-size: 18px; margin: 0;">Hesap:</p>
        <p style="color: #424242; font-size: 18px; margin: 0;">${account} Vadesiz</p>
      </td>
    </tr>
      <tr>
        <td style="padding: 10px 0px; background-color: #f9f9f9;">
          <p style="color: #00796B; font-size: 18px; margin: 0;">Tarih:</p>
          <p style="color: #424242; font-size: 18px; margin: 0;">${date}</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0px; background-color: #f2f2f2;">
          <p style="color: #00796B; font-size: 18px; margin: 0;">Tutar:</p>
          <p style="color: #424242; font-size: 18px; margin: 0;">${amount}</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0px; background-color: #f9f9f9;">
          <p style="color: #00796B; font-size: 18px; margin: 0;">Islem:</p>
          <p style="color: #424242; font-size: 18px; margin: 0;">${type}</p>
        </td>
      </tr>
    </table>
    
    <p style="color: #E53935; font-size: 14px; text-align: left;">Bu bir örnektir. Gecerliligi bulunmamaktadir</p>
  </body>
    </html>`,
    fileName: 'Dekont_' + Date.now().toString(),
    directory: 'Documents',
  };
  console.log('pdf');
  const file = await reactNativeHTMP2PDF.convert(options);
  alert(file.filePath);
}

export default generateReceiptPDF;
