#version 450

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTextCoord;

layout(location = 0) out vec4 outColor;

layout(binding = 1) uniform sampler2D texSampler;

void main() {
    // outColor = texture(texSampler, fragTextCoord * 2.0);
    outColor = texture(texSampler, fragTextCoord);
    // outColor = vec4(fragColor * texture(texSampler, fragTextCoord).rgb, 1.0);

}