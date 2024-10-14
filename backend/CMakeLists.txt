# Minimum version of CMake required
cmake_minimum_required(VERSION 3.10)

# Project name
project(MyApp)

# Set C++ standard to C++20
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Add the executable for your project
add_executable(myapp main.cpp)

# Include directories for Crow and ASIO
target_include_directories(myapp PRIVATE 
    ${CMAKE_SOURCE_DIR}/crow_all.h 
    ${CMAKE_SOURCE_DIR}/thirdparty/asio 
    ${CMAKE_SOURCE_DIR}/thirdparty/asio/include
)

