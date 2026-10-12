const authorUrls = {
    'Masoud Seddighin': 'https://sites.google.com/view/masoudseddighin',
    'MohammadTaghi Hajiaghayi': 'https://www.cs.umd.edu/~hajiagha/',
    'Mohammad T. Hajiaghayi': 'https://www.cs.umd.edu/~hajiagha/',
    'Mahdi JafariRaviz': 'https://mahdij.com/',
    'Soheil Mohammadkhani': 'https://sohsoh84.github.io/',
    'Iman Gholami': 'https://igholami.com/',
    'AmirMohammad Shahrezaei': 'https://scholar.google.com/citations?user=5_q0PD8AAAAJ&hl=en&authuser=1',
    'Alireza Keshavarz': 'https://scholar.google.com/citations?user=DXhuYrEAAAAJ&hl=en&authuser=1',
    'Ehsan Heidari': 'https://scholar.google.com/citations?user=1shdiFQAAAAJ&hl=en&authuser=1'
};

function linkifyAuthors(authorList) {
    return authorList.map((name, index) => {
        const linkedName = authorUrls[name] 
            ? `<a href="${authorUrls[name]}" class="author-link" target="_blank">${name}</a>`
            : name;
        
        if (index === authorList.length - 1) return linkedName;
        if (index === authorList.length - 2) return `${linkedName}, and `;
        return `${linkedName}, `;
    }).join('');
}

function createPublication(title, pdfLink, conference, conferenceShort, authorList) {
    const titleMarkup = pdfLink
        ? `<a href="${pdfLink}" target="_blank">${title}</a>`
        : title;
    const conferenceMarkup = conferenceShort
        ? ` <span class="conference">(${conferenceShort})</span>`
        : '';

    return `
        <li>
            <strong>${titleMarkup}</strong>${conferenceMarkup}<br>
            ${linkifyAuthors(authorList)}
        </li>
    `.trim();
}
