---
layout: project
title:  "Occupancy Map Prediction for Improved Indoor Robot Navigation"
date:   2022-04-24 01:00:00 -0500
categories: perception, inpainting, aerial robot
author: "Vishnu Sharma"
---

<center>
# Occupancy Map Prediction for Improved Indoor Robot Navigation

### Abstract

In the typical path planning pipeline for a ground robot, we build a map (e.g., an occupancy grid) of the environment as the robot moves around. While navigating indoors, a ground robot's knowledge about the environment may be limited by the occlusions in its surroundings. Therefore, the map will have many as-yet-unknown regions that may need to be avoided by a conservative planner. Instead, if a robot is able to correctly infer what its surroundings and occluded regions look like, the navigation can be further optimized. In this work, we propose an approach using pix2pix and UNet to infer the occupancy grid in unseen areas near the robot as an image-to-image translation task. Our approach simplifies the task of occupancy map prediction for the deep learning network and reduces the amount of data required compared to similar existing methods. We show that the predicted map improves the navigation time in simulations over the existing approaches.


</center>
