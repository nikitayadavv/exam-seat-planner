# College Exam Seat Planner
This is a small project I built to help with exam seat allocation in colleges.

# What it does

Basically, you can add classrooms (with their capacity and floor number), and then enter how many students need seats for an exam. The app figures out which rooms to use.

# Built with
- HTML
- React
- Plain CSS
- JS


# How the seat allocation works

I used a simple greedy approach here:

1. First, I sort all the rooms by floor (ground floor first, then 1st floor, etc.)
2. Then I go through each room starting from the lowest floor
3. Keep adding rooms until we have enough seats for everyone
4. If there aren't enough total seats, it just shows a message "Not enough seats available".

So basically it tries to use lower floors first, which makes sense for accessibility.

# Running it locally

Clone this repo, then:

```
npm install
npm run dev
```
That's it! Open http://localhost:5173 and you're good to go.
# Building for production
```
npm run build
```
Feel free to use this for your own college projects!
# live url
https://exam-seat-planner-seven.vercel.app/
# github repo link
https://github.com/nikitayadavv/exam-seat-planner.git
