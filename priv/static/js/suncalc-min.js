/*
 Copyright (c) 2011, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun position and sunlight phases.
 https://github.com/mourner/suncalc
*/
(function(c){function n(a){return new Date((a+0.5-o)*p)}var c="undefined"!==typeof exports?exports:c.SunCalc={},b=Math,f=b.PI/180,a=b.sin,i=b.cos,p=864E5,o=2440588,t=357.5291*f,u=0.98560028*f,v=1.9148*f,w=0.02*f,x=3.0E-4*f,y=102.9372*f,q=23.45*f,D=280.16*f,E=360.9856235*f,r=[[-0.83,"sunrise","sunset"],[-0.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];c.addTime=function(a,b,d){r.push([a,b,d])};c.getTimes=
function(m,h,d){var d=f*-d,h=f*h,m=b.round(m.valueOf()/p-0.5+o-2451545-9.0E-4-d/(2*b.PI)),e=2451545.0009+(0+d)/(2*b.PI)+m,g=t+u*(e-2451545),c=v*a(g)+w*a(2*g)+x*a(3*g),c=g+y+c+b.PI,z=b.asin(a(c)*a(q)),e=e+0.0053*a(g)+-0.0069*a(2*c),s={solarNoon:n(e)},k,A,j,l,B,C;for(k=0,A=r.length;k<A;k+=1)j=r[k],l=j[0],B=j[1],j=j[2],l=2451545.0009+(b.acos((a(l*f)-a(h)*a(z))/(i(h)*i(z)))+d)/(2*b.PI)+m+0.0053*a(g)+-0.0069*a(2*c),C=e-(l-e),s[B]=n(C),s[j]=n(l);return s};c.getPosition=function(c,h,d){var d=f*-d,h=f*h,
c=c.valueOf()/p-0.5+o,e=t+u*(c-2451545),g=v*a(e)+w*a(2*e)+x*a(3*e),g=e+y+g+b.PI,e=b.asin(a(g)*a(q)),g=b.atan2(a(g)*i(q),i(g)),d=D+E*(c-2451545)-d-g;return{azimuth:b.atan2(a(d),i(d)*a(h)-b.tan(e)*i(h)),altitude:b.asin(a(h)*a(e)+i(h)*i(e)*i(d))}}})(this);
