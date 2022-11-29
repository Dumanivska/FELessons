//1
{
    let textDiv = document.getElementById('text');
    let textArea = document.getElementById('text-area');

    document.addEventListener('keydown', function keyClick(event) {
        console.log(event)
        if (event.ctrlKey && event.keyCode == '69') {
            event.preventDefault()
            textDiv.style.display = 'none';
            textArea.style.display = 'block';
            textArea.innerHTML = textDiv.innerHTML;
            return textArea;
        } else if (event.ctrlKey && event.keyCode == '83') {
            event.preventDefault()
            textDiv.style.display = 'block';
            textArea.style.display = 'none';
            textDiv.innerHTML = textArea.value;
            return textDiv;
        }
    })
}

//2
let tableList = [
    {
         city: 'Kiev',
        year: 482 ,
        kilometres: 836,
        passengers: 2966
    }, 
    {
       city: 'London',
        year: 1863,
        kilometres: 394,
        passengers: 775
    }, 
    {
        city: 'Washington',
        year: 1976,
        kilometres: 126,
        passengers: 144
       
    }, 
    {
        city: 'Los Angeles',
        year: 2001,
        kilometres: 28,
        passengers: 50
    }, 
    {
        city: 'Kyoto',
        year: 1981,
        kilometres: 11,
        passengers: 45
    },
    {
         city: 'Tokyo',
        year: 1927,
        kilometres: 155,
        passengers: 1927
    }
];

    let sortType = null;
    let div = document.getElementById('table');
    let table = document.createElement('table');
    let headTable = document.createElement('thead');
    let bodyTable = document.createElement('tbody');
    div.append(table);
    table.append(headTable);
    table.append(bodyTable);
    headTable.setAttribute("class", "table__head");

    function addHeading () {
        let i = 0;
        for (let param in tableList[0]) {
            let heading = document.createElement('th');
            heading.innerHTML = param;
            heading.id = `${param}-heading`;
            i++;
            headTable.append(heading);
        }
    }
    addHeading();

    function addContentTable () {
        for (let item of tableList) {
            let tableRow = document.createElement('tr');
            bodyTable.append(tableRow);
            for (let param in item) {
                let tableCell = document.createElement('td');
                tableCell.innerHTML = item[param];
                tableRow.append(tableCell);
            }
        }
    }
    addContentTable();

    headTable.addEventListener('click', sort);

    function sort (event) {
        if ((event.target.id.includes('heading'))) {
            let sortedBy = event.target.id.replace('-heading', '');
            tableListSort(sortedBy);
            bodyTable.innerHTML = '';
            addContentTable();
        }
    }

    function tableListSort (sortedBy) {
        if (!sortType) sortType = 'ASC';
        if (sortType === 'ASC') {
            tableList.sort((a,b) => a[sortedBy] > b[sortedBy] ? 1 : -1);
            sortType = 'DESC';
            return;
        }
        if (sortType === 'DESC') {
            tableList.sort((a,b) => a[sortedBy] > b[sortedBy] ? -1 : 1);
            sortType = 'ASC';
            return;
        }
    }










//3
{
        let block = document.getElementById('size')
    let resize = document.getElementById('size__area');




    let X,
        Y,
        startWidth,
        startHeight;

    function startResize (event) {
        event.preventDefault();
        X = event.clientX;
        Y = event.clientY;
        startWidth = block.offsetWidth;
        startHeight = block.offsetHeight;
        window.addEventListener('mousemove', resizing);
        window.addEventListener('mouseup', stopResize);
    }

    function resizing (event) {
        let changeX = event.clientX - X;
        let changeY = event.clientY - Y;
        block.style.width = `${startWidth + changeX}px`;
        block.style.height = `${startHeight + changeY}px`;
    }

    function stopResize () {
        window.removeEventListener('mousemove', resizing);
    }

    resize.addEventListener('mousedown', startResize);

    }