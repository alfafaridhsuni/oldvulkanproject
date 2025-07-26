# Updated to include VULKAN_SDK fallback and symlink

# Set CMake minimum
cmake_minimum_required(VERSION 3.15)

# Set project
project(VulkanApp)

# Set C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Enable high optimization
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O3")

# Set the output executable name
set(EXECUTABLE_OUTPUT_PATH ${CMAKE_BINARY_DIR}/bin)

# Main source file
set(SOURCES mainVulkan.cpp)

# Include directories
include_directories(
    ${VULKAN_SDK}/include
    /opt/homebrew/include
    ${CMAKE_SOURCE_DIR}/stb
    ${CMAKE_SOURCE_DIR}/tinyobj
    ${CMAKE_SOURCE_DIR}/model
    ${CMAKE_SOURCE_DIR}/shaders
    ${CMAKE_SOURCE_DIR}/textures
)

# Link directories
link_directories(
    ${VULKAN_SDK}/lib
    /opt/homebrew/lib
)

# Define executable
add_executable(VulkanApp ${SOURCES})

# Link libraries (Vulkan, GLFW, and macOS frameworks)
target_link_libraries(VulkanApp
    vulkan
    glfw
    "-framework Cocoa"
    "-framework QuartzCore"
    "-framework IOKit"
    "-framework CoreFoundation"
)

# Set RPATH to Vulkan lib dir
set_target_properties(VulkanApp PROPERTIES
    INSTALL_RPATH "${VULKAN_SDK}/lib"
)
