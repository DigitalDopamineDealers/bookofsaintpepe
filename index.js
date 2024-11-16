let currentPage = 0;
let pageElements = [];

let elements = document.querySelectorAll('[id^="page-"]');

elements.forEach(element => {
    let pageNumber = element.id.split('-')[1];
    
    if (!isNaN(pageNumber)) {
        pageElements.push({id: element.id, page: Number(pageNumber), element: element});
    }
});

function update_page_visibility(){
    pageElements.forEach(page => {
        if(page.page === currentPage){
            page.element.style.display = 'block';
        }else{
            page.element.style.display = 'none';
        }
    });
}

update_page_visibility();

document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentPage > 0) {
        currentPage--;
        update_page_visibility();
        console.log(currentPage);
    }
});
document.getElementById('nextBtn').addEventListener('click', function() {
    if(currentPage < pageElements.length){
        currentPage++;
        update_page_visibility();
        console.log(currentPage);
    }
});