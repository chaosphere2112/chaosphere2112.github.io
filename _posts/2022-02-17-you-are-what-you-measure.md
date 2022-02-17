---
layout: post
title: "You Are What You Measure"
subtitle: "Unintended Consequences of Key Results"
date: 2022-02-17
categories: metrics
short_desc: "Goal setting is hard. Setting the wrong goals is harmful."
visible: false 
---

I recently left my position at Google Search, and am enjoying the phenomenon known as “funemployment” for the first time in my life. In the three weeks between jobs, I’ve decided to use the time to build some healthy habits (in addition to feeding my growing mountain of side projects and hobbies). One habit that I’m particularly interested in building up for the first time is regular exercise; I’ve always been fairly spotty about going out and doing that kind of thing and, well, it shows. As I am now resplendent with free time, I thought I’d set myself a goal: 100 miles a week on my bicycle while I’m unemployed.

My first week’s results:

<img src="/docs/assets/kr-1.png" width="300" style="text-align: center; display: block;">

Woo-hoo! Goal, achieved! OKR is at 1.0 for week 1! That sweet, sweet dopamine hit of checking something off a list.

Most of those rides looked roughly like this:

<img src="/docs/assets/kr-2.png" width="300" style="text-align: center; display: block;">

But this week, I went on a ride that looked like this:

<img src="/docs/assets/kr-3.png" width="300" style="text-align: center; display: block;">

A little over half the distance, only 2/3rds the time, with almost twice as much elevation gain; all to produce functionally the same amount of caloric impact. If I want to maximize my caloric wins while minimizing the amount of real time I spend on the bike—which would be nice! Time is… well, not money (since I’m unemployed), but valuable—clearly the best strategy would be to do more of these shorter rides with more climbing!

Which… is directly counter to my stated goal of getting 100 miles a week.

## The Opportunity Cost of an OKR

**O**bjectives and **K**ey **R**esults are a methodology used to set goals for individuals, teams, and organizations. You set a high level objective (in my case, "be healthier") and break it into a set of Key Results that are measurable (which indicates whether or not you were successful).

The problem with most (all?) metrics is that they *usually measure more than one thing* and maximizing one metric may mean **sacrificing other metrics you care about**.

Setting an OKR is about building an incentive structure into your organization; at Google, promotions and performance appraisals are frequently tied directly into OKRs (especially at higher levels). By picking “miles” as my metric for my KR, I’ve defined success as “biking a long distance”. That influences the routes that I choose, the frequency that I bike, and the amount of time I spend cycling.

But in practice, I don’t really care about biking a long distance- I care about building healthy habits and losing weight. I have seen this exact issue multiple times; people **confuse the metric for the objective**. A change that drops the metric, but makes a meaningful improvement of the actual objective should be celebrated! In general, leadership at Google rewards that kind of behavior (they’re smart people). The problem is that by sticking a number in front of the company to optimize, you actually stifle innovation at the ground level.

Feature development at Google generally starts with a cross-functional team coming up with ideas, implementing them, and testing them out via A/B experiments. If an idea results in dropping the KR metric… it usually gets left on the cutting room floor. Teams react to their incentive structure to try and align under OKRs.

This is usually fine! But it does come with a real opportunity cost. Good-to-great products sometimes can’t ever be launched because they cause losses in some other KR, even if they’d make a more sizable stab at the raw objective. This can be addressed by people being _incredibly careful about KR metric selection_. 

## What makes a good metric?

KR metrics should be:

  - A good proxy for your objective
  - Easy to measure
  - Not overly influenced by outside forces
  - Easier to accomplish the more you do them
  - Simple to understand

There's a lot going on there. Let's break those down a bit.

### Proxy Measures

Good goals are more complicated than numbers. Things like "deliver best-in-class service to customers", or, for me, "be healthier". In practice, though, you need a bit more specificity to really fit into the OKR framework. Redefining my objective a bit, we can frame it as “build a sustainable exercise habit that makes meaningful improvements to my health and weight”. There are two key parts of this, which we'll refer back to a few times:

1. Sustainable Exercise Habit
2. Meaningful Improvements

Why would I frame it like that? Well, because both are necessary to meet the ultimate goal ("be healthy"). I don't have a sustainable exercise habit; in order to build that, I have to exercise frequently. Exercising frequently isn't sufficient for being healthy, though- if I took a twenty minute walk every day, that would help, but it wouldn't make any meaningful improvement to my weight (which is a separate health issue).

You can use multiple KRs per Objective, so in theory we could use multiple goals to address the two halves of this. I'm not a huge fan of that approach, because it makes things more complicated. If we can identify a single metric that covers both bases, then we're in better shape (pun intended).

Mileage is a strong correlate for the "Sustainable Exercise Habit" half, but doesn't work so well for the "meaningful improvements". We can see from the second ride above that we can be more efficient about calorie-burning by doing shorter rides that are more intense. Calories burned (technically, broken into something like "X rides that burn Y calories") would be a great metric from a proxy standpoint, but it has more problems that we'll cover later.

I've seen Search-wide OKRs fail due to poor choice of proxy measures. By picking something that you can fulfill by doing things that are easy (low-speed bike rides, e.g.), you make the optimal strategy hurt the actual objective by feeling like you're making real progress while, _ahem_, spinning your wheels.

### Easy to Measure

Reliable measurements are important. Like, really important. If you have a massive margin of error due to inherent uncertainty based on your measurement approach, you really aren't doing anything useful. This is part of the problem with using multiple KRs, or aggregate metrics built up from a bunch of different components; you compound uncertainty.

Mileage is a great metric from an "ease of measurement" standpoint. It's got a simple number (how far did you ride) and tracking is done by a cell phone with high accuracy (thanks, GPS!). Calories burned isn't as good, here; it is inherently an estimate. Strava's estimate of calories is based on your weight, the distance traveled, the amount of time you travel, and how much climbing you do. More accurate measurements can be had (heart rate monitors, e.g., would help a bit and are more accurate calorie predictions), but they require additional tools and are still estimates.

Metrics that are hard to measure, hard to calculate, or poorly defined (leaving wiggle room for redefining success down the road) are problematic. One big challenge my team faced was our Search-level OKR was pretty hard to calculate, and no other team knew how to do so. This made it challenging to make progress on it, because of the next bullet...

### Not Overly Influenced by Outside Forces

It _sucks_ to have a KR that is controlled by forces outside your control. By setting things up like this, you are basically guaranteeing burnout and superheroics on the team if they're trying to make it happen.

Speed would be a great example of a metric that would be overly influenced by outside forces. Wind, climbing, traffic, and more all prevent you from being able to ride fast. If I was setting my goal in terms of "ride X miles at Y miles-per-hour", I would be truly set up for failure.

My team's OKR didn't _need_ to be influenced by outside forces, but due to the difficulty of measurement, other teams chipped away against our progress unknowingly. We were able to address this by comparing versus the state when we started, but things did get a bit hand-wavey.

### Easier to Accomplish Over Time

This one's pretty straightforward- it shouldn't get _harder_ to finish a goal the closer you get.

Calories basically doesn't work as a metric because of this. The more the scheme to get exercise works, the less (in theory) I weigh; this then drives down how many calories I burn for a given distance / time. Mileage has a much better relationship here- the more I ride, the less work it is to ride that distance later.

While most metrics don't explicitly get harder to do, the way you prioritize effort in a project can make things harder to do later. It's frequently tempting to start off with something easy. The problem is that most easy work isn't very useful, and it usually doesn't stretch the bounds of your solution. You miss out on complications, necessary complexity, and all sorts of other things. In practice, I find it's a lot better to start with a mid-sized item for your first step, and then immediately jump into the bigger and harder items. Once you've gotten those knocked out, you've tested the bounds of your solution space while not setting yourself up for huge changes down the road.

### Simple to Understand

I dislike complicated metrics. The more you have to twist your brain around a metric to really understand how it works, the likelier it is that someone is going to misinterpret it.

Power (Watts, in the above images) is a complicated metric. It's also, according to initial googling, the _best_ metric, which is annoyingly common in my experience. I don't rightly understand all of the implications yet, which is why I'm not going to start using it as my core metrics for success, but I'll probably start evaluating it this year and see if it's reasonable to set a goal using it next year.

Complicated metrics should be held at arms length. Due to having many inputs, optimizing for them can have impacts you don't want. For example: a few years back in Search, there was a metric frequently used in KRs. This metric had a ton of different inputs, which made it fairly complicated to interpret (more on that another time). Over time, there was parallel evolution from more than a dozen different teams that led to many features accidentally pushing that metric slightly more positive than it otherwise should have been.

## Conclusion

My experience has repeatedly shown me the power of sticking a number in front of people for them to sprint towards. It works _really_ well for getting a lot of people with different points of view working on pushing things forward for the company. People behave rationally in response to their incentives.

Because they are at best proxies for our actual goals, metrics are somewhat noisy. When teams are pushing metrics forward, they may be having additional impact that isn't desirable; they may also be quietly squashing efforts that would have more significant impact on your objectives because they don't line up with the metrics you've selected.

Key Results have an outsized impact on your organization; you should be _exceedingly_ careful when picking them, and work through all the ways that they could be acheived without actually pushing your objective forward.
