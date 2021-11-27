let targetLink = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');
console.log(tabContent);

for(let i = 0; i < targetLink.length; i++) {
    targetLink[i].addEventListener('click', function(e) {
        console.log(e.target);
        e.preventDefault();
        let orgTarget = e.target.getAttribute('href');
        let tabTarget = orgTarget.replace('#', '');
        
        for(let j = 0; j < tabContent.length; j ++) {
            tabContent[j].style.display = 'none';
        }
        document.getElementById(tabTarget).style.display = 'block';

        for(let k = 0; k < targetLink.length; k++) {
            targetLink[k].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}
document.getElementById('tabs-1').style.display = 'block';


