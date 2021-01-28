const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    /*this.dataset data attributelarin hepsini barindirir.*/
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);   
}

inputs.forEach(x=>x.addEventListener('change',handleUpdate));
inputs.forEach(x=>x.addEventListener('mousemove',handleUpdate));