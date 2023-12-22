#include utils.glsl;

varying vec2 vUv; 

vec3 hsl2rgb( vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
}

void main() {
    float l = complexMagnitude(vUv);
    l = l/(1.0+l);


    gl_FragColor = vec4(hsl2rgb(vec3(complexArgument(vUv)/ 6.283185307, 1.0, l)), 1.0);
}