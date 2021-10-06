function onBlur(){
    const content = document.getElementById("content");
    content.value = content.value.toLowerCase();
}

export{onBlur}