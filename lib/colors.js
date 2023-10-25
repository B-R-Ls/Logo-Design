const small = (hex) => {
    let r = hex.slice(1,2);
    let g = hex.slice(2,3);
    let b = hex.slice(3,4);
  
    r = parseInt(r+r, 16);
    g = parseInt(g+g, 16);
    b = parseInt(b+b, 16);
    
    return `rgb(${r}, ${g}, ${b})`;
}
  
const rgb = (hex) => {
    if(hex.length === 4){
        return small(hex);
    }
    
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
      
    return `rgb(${r}, ${g}, ${b})`;
}

module.exports = rgb;