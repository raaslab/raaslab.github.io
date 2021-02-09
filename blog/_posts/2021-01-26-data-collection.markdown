---
layout: post
title:  "How to Collect Data!"
date:   2021-01-26 15:20:00 -0500
categories: UAVs
author: "Kevin Yu"
---

Back to blog posts: [Blogs](http://raaslab.org/blog/)

Check out my personal website at [Google site](https://sites.google.com/view/kevinlyu/home)

![kentland](/img/kentland.jpg "kentland")


The reason that you are here as the reader is to understand something about gathering data using drones. Well starting off many of you might be wondering am I even qualified to talk on the subject or am I just talking out of my... mouth.

Well some of my technical background is that I am a PhD student in computer engineering at Virginia Polytechnic State Institute, Virginia Tech for short. All of my research has been on autonomous robots, specifically UGVs and UAVs. Those are Unmanned Ground Vehicle and Unmanned Aerial Vehicle, respectively of course. I've worked on so many different projects that I'm sure I won't be able to list them all, but a few are point coverage using a team of UGV and UAV with the UAV having a limited battery life, a bat sonar project, coverage using a team of UGV and UAV, plume detection, agricultural monitoring, safety constrained UAVs, SLAM projects, bridge inspection, and probably more. Now for each of these projects I've done some sort of data collection using UAVs. I've flow UAVs indoors, outdoors, without GPS, without line of sight, the list goes on. Now with all of that I've also crashed UAVs... that comes with fixing them. Hopefully that convinced you to continue to read, but it also might have made you so board that you left the page.

<h2>Life of a UAV</h2>
For data collection we need something to collect it with. We could use the standard 5 senses and have a human do all the work or we could use UAVs! So in the interest of this blog post we'll use UAVs.

<video width="600" controls="controls"> <source src="/vids/video2.mp4"> </video>

To start off we need to build a UAV. When building your UAV there are a few approaches that can be taken: buying a prebuilt UAV, fabricating the UAV from scratch and a mixture of the two. When buying a prebuilt system I start by investigating the company. This can take many forms such as looking at the website, contacting customer service, going into a store, and asking others who have used their product. I have always believed that anything you buy has a chance to have a problem. I never really cared if I got a product that was faulty or that had some defects, but I did care how a company handled the situation. If the company helps to fix the problem or rectify the mistake then I think all is good. This is mainly because I believe that everything has a chance of failure and it's not how the company acts when everything is perfect, but when everything goes wrong. So first and foremost it's how the company handles it's customers that I care about.

Secondly does the specifications of the product fit your needs. You can look at the technical spec sheets and manuals. Those both do a great job of letting you know if the product you're buying fits your needs, but another really great way to find out if the product you're buying fits your needs is by searching for if someone has already done this. Where is this product used and what are other projects that have used it. By doing this you can see how the product works in certain environments as well as get information on the longevity of the product and maybe some small things that you didn't think of, like the propellers don't last long or the propellers are really robust surviving crashes. These are things that the spec sheets or manuals won't comment on. In the end though there is some risk that is being taken when buying anything new/old or used before or haven't.

Lastly you need to take the plunge into buying the product and that means pulling out your wallet and inputting your credit card. If you're fortunate to not have to worry about money then by all means buy all of the products that you want and test them all and at the end choose the right one, but for most that is not the case. This is why research and time spent before getting the product is probably the most important time. Like they say, "measure twice, cut once."

Now I did mention that you could fabricate all of these parts yourself and this method could be considered the hardest. For this I won't go into how it's done, but the basics are do your research on making every part, do your R\&D, and prototyping.

For me most of my projects took the third approach, which is buying the parts and putting it together myself. This method allows for the user to get much cheaper parts, but you may not have the best "customer service". I find by doing this it feels more natural in a sense and really does allow you to make your custom UAV for your project in mind. You can put whatever parts you want on the UAV like stronger motors or specialized sensors, but this comes with a downfall of you being the one who has to test if everything works together. Also remember that just because it says something on the spec sheet that might be in the best scenarios with no wind or crazy flight maneuvers.


<h2>Sensors for days</h2>
Now that you have your UAV it should be equipped with some sensors. Those sensors are your eyes, ears, finger, mouth, nose, and even more. Since I'm not an expert in whatever you're doing I can't comment on it, but for some of my projects I can give you examples of the sensors I use. For bridge inspection I use a 3D LiDAR and RGB stereo camera. For mining inspection LiDAR and RGB stereo camera. For most of my work it's just LiDAR and RGB camera, but for your work it might be different. For instance I worked with someone who was doing plume detection and there was a problem with LiDAR being used for altitude estimation. Since the water surface absorbed the LiDAR there was not an accurate representation of the height so the UAV would actually crash into the water if we didn't intervene. So as the subject matter expert you as the reader are responsible for knowing what sensors will and will not work for your case.

![drone](/img/drone.jpg "drone")

When picking out your sensors keep in mind the data you want to collect and the purpose of the project. If you want to create a cheap alternative it better be cheap. If you want to create a system that could last for years it better have state of the art equipment or easily upgradable. Think of the current situation you are in, but also think of being able to upgrade your system. In research it is guaranteed that a new sensor will come out next year. It is guaranteed that someone else who is doing something similar to you could be using another sensor suite. At the end of the day you need to stick to your guns and be confident in the choices you make. Now some of this needs to be thought of while making the UAV because the sensors directly impact the flight time of the UAV and stability. Once again don't be afraid to fail because that will also happen and if you never failed then you never tried hard enough. When building your UAV make sure that your sensors are placed in specific locations that actually collect data.

<h2>Before the trip</h2>
Going out with a group of people is almost necessary, but you might have to go out alone. In either case you want to have a checklist of everything you need (drone, controller, data collection device, data processing device, spare parts, and emergency equipment). This checklist will make it super easy to make sure you have everything for each time you go and it will make it less stressful to pack for outdoor experiments. Secondly the safety equipment that you will need is mandatory. Do not skimp on the safety equipment. Worst case scenario you call 911 and have them handle all of the issues, but it should never get to that if you are well prepared and have taken the proper precautions.

Take into consideration the license you might need to collect the data and the safety protocols you need. For my mining project we have to do through a safety orientation of the mine before we could go down. Also take into consideration the airspace you're going into. This means you have to check which license you will need for the different airspace and if you might have to notify local authorities. When in doubt call. If you have doubts on if you can or can't fly somewhere just call the local authorities and they should be able to help you.

Lastly have a plan of action. Understand what you want to get and how to get there. Make sure you know who is going to do what. Just like sports teams, everyone should have a job and know what they need to do before they do it. Now this step can happen once you're out in the field, but that might make it a longer day outside so if it's nice outside maybe leave this to when you're in the field. If it's a bad day outside potentially freezing rain then this step should probably be done indoors before hand. Keep your checklist, plan of action, and other paper work all in one place. By doing this it's easiest to find out what needs to be done and everyone can go to the same place to get instructions. When things go sideways people will be able to look at your documentation and see that you were as prepared as possible and therefore you will have less problems dealing with authorities if something does go wrong.


<h2>Data Collection</h2>
Getting out to the field get everyone together and go over the game plan. Then remember your checklist and plan of action and everything should go pretty smoothly. Great we have our UAV and our sensors needed to collect the data, now we have to get the data. I think the biggest take away that I have learned from my PhD is that all data is good data. Come up with a good naming scheme for all of your data first. I think a really great way of doing this is having one external hard drive for each of your projects. This way you can transport data to any system. However this does come with the drawback that you might loose the data because you loose the hard drive. So with that you can always back up your data on a server, but I think it's best that you don't do things locally on your computer. This leads to different sets of data, duplicates, and if you work with software different versions that may or may not work when merged. Overall the idea is to have a system in place that allows you to keep all your data in one place, easily accessible from multiple locations and machines, and doesn't get messy overtime. Spending extra time on this early will really save you in headache down the line.

![bridge](/img/bridge.jpg "bridge")

When doing experiments record every run, even the ones that weren't meant to get any data. Record all data! This way you always have extra data when you might need it and it will help prevent you from having to go out more. Execute the experiments that you wanted to do and then check the data. When checking the data it's best to see if the data is able to be reproduced multiple times and if you can see it after the fact. Data isn't helpful if you can't use it later. Also it is helpful to take into account the conditions of the day. For instance if it's cold, if it's windy, if it's sunny, how many people were there, was there radio interference, and more. You should gather enough data to recreate that day later on in the future.

For me one of the biggest things I regret not doing is not taking enough video and pictures. Now it is true that you can show people the data to show how well something went, but being able to give someone a video is by far the most impactful.

<video width="400" controls="controls"> <source src="/vids/video1.mp4"> </video>
<video width="530" controls="controls"> <source src="/vids/video6.mp4"> </video>

<h2>After the trip</h2>
After you come back from your outdoor experiments you need to process the data. You should have processed part of it in the field and by this I mean look to see that the data is there, make sure that the data is readable, and some common sense things like the time stamps are going forward in time.

Go ahead and process the data and see what was missed. If your data turned out great and you don't need to go out again then congratulations you're done and you can go home happy. If your data isn't what you wanted then start to plan your next trip. Make sure you add these problems to your plane of action and checklist so that you don't forget next time! With that everything should be done for field experiments. Feel free to change your data collection trips to your needs and use this as a guide line, but in all don't be afraid to fail and know that you might have to do your experiments multiple times so planning for that might be helpful as well.

<h2>Key Takeaways</h2>
Here are some key takeaways for how to collect data with UAVs!
1. Focus on having a UAV that is modular and can be easily fixed. Plan in your budget for parts breaking, have spare parts around, or make sure that you can pay to have someone else fix it.
2. Have sensor suites that benefit the end goal. Make sure your sensors collect all the data you need and more if possible. You never know when you might want to expand on your project.
3. Have a check list and plan of action before going out. Most importantly have a plan for if everything goes wrong. Most people can plan for if everything goes right, but I would argue that it is more important to plan for the worst case scenario.
4. Collect all data from all sensors and more. If you can't get someone else out there with you to help record videos and take pictures, buy a tripod and set that up to record your work. Having at least one extra video of your work can help you recall what you did that day and is cool to show off.
5. It's best to process data as soon as possible. Expect your experiments to be done when you have finished processing the data not just collecting it.
6. Update all of your records, lists, and plans if needed and repeat.

Remember that data collection and experiments are a lot of work and may need to be done multiple times. At first it maybe hard to get off your chair, but learn to embrace it. Like publicity, any data is good data, "bad" or "good".

<h2>About the Author</h2>
![Kevin Yu](/img/kevin.jpg "Kevin Yu")
My name is Kevin Yu and I am a PhD student currently looking for a job at the time of writing this blog. I like to climb, play tennis and ski. I've done many sports in my lifetime like soccer, equestrian, cross country running, swimming and more. I am trying to learn how to snowboard this year. Turns out it's harder than it looks.
