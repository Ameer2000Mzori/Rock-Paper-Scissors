(()=>{function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.getElementsByClassName("text-lose-win")[0],r=document.getElementById("restart-Btn"),o=document.getElementsByClassName("restart-whole-game")[0],a=document.querySelectorAll(".player-Btn-Wrapper")[0],c=document.getElementsByClassName("player-score-h1")[0],l=document.querySelectorAll(".Pc-game-Btn-Wrapper")[0],s=document.getElementsByClassName("Pc-score-h1")[0],i=0,u=0;function d(){i=0,u=0,c.textContent="YOU - ".concat(i),s.textContent="Computer - ".concat(u),n.textContent="CLICK TO PLAY",n.style.color="black",a.classList.remove("active");var t,r=e(a.children);try{for(r.s();!(t=r.n()).done;)t.value.classList.remove("active")}catch(e){r.e(e)}finally{r.f()}var o,d=e(l.children);try{for(d.s();!(o=d.n()).done;)o.value.classList.remove("active")}catch(e){d.e(e)}finally{d.f()}}a.addEventListener("click",(function(e){var t=e.target.id;a.children[t].classList.add("active"),a.classList.add("active");var r=Math.round(2*Math.random());l.children[r].classList.add("active"),t>r?(console.log("payer won"),i+=1,console.log(i),c.textContent="YOU - ".concat(i),n.textContent="YOU WON",n.style.color="green"):t<r?(console.log("payer lost"),u+=1,console.log(u),s.textContent="Computer - ".concat(u),n.textContent="YOU LOST",n.style.color="red"):(console.log("same"),n.textContent="DROW",n.style.color="gray")})),r.addEventListener("click",(function(){(u||i>=5)&&d(),n.textContent="CLICK TO PLAY",n.style.color="black",a.classList.remove("active");var t,r=e(a.children);try{for(r.s();!(t=r.n()).done;)t.value.classList.remove("active")}catch(e){r.e(e)}finally{r.f()}var o,c=e(l.children);try{for(c.s();!(o=c.n()).done;)o.value.classList.remove("active")}catch(e){c.e(e)}finally{c.f()}})),o.addEventListener("click",d)})();