document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=e.parentElement;if(t.target===i){var n=i.clientHeight,a=i.clientWidth,c=e.clientHeight,l=e.clientWidth,h=t.offsetY,r=t.offsetX;e.style.top=Math.max(0,Math.min(h-c/2,n-c))+"px",e.style.left=Math.max(0,Math.min(r-l/2,a-l))+"px"}});
//# sourceMappingURL=index.59d13a8e.js.map
