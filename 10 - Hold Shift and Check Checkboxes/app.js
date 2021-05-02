const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// click event is fired even when you use your keyboard wheras change event is not.

let lastChecked; // we use let since it will be reassigned constantly.

function handleCheck(e)
{
    let inBetween = false;
    if(e.shiftKey && this.checked)
    {
        checkboxes.forEach(checkbox=>{
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked)
            {
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// Firstly, we need to hold the one clicked, so that when we click another one holding shift, we know where to start from.
// Secondly, we need to check whether thet had the shift key down.
// We also need if they are checking it, NOT unchecking it.
// Then we loop over every single checkbox. When we encounter the first one checked, we set inBetween variable to true. 
// When we encounter the lastChecked, then we set inBetween variable to false again.
