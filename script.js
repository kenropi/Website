function response(isAccepted) {
    var newWindow = window.open('', '_blank'); // Open a new tab or window
    var htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Response</title>
            <link rel="stylesheet" href="style.css"> <!-- Link to your CSS for styling -->
        </head>
        <body>
            <div class="response-container">
                <h1>${isAccepted ? "Yipeee!" : "Is okay hun."}</h1>
                <p>${isAccepted ? "I'm so happy you accepted to be my Valentine!" : "I can wait kok, we are dating after all tehee."}</p>
            </div>
        </body>
        </html>
    `;

    newWindow.document.write(htmlContent); // Write the HTML to the new window
    newWindow.document.close(); // Close the document to finish writing
}
