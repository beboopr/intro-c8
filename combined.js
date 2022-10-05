const age = 19.5;
const isReligiousExempt = true;
if(age >= 21 || isReligiousExempt) {
    console.log('you can drink!')
} else if (age >= 18) {
    console.log('you can party')
} else {
    console.log('you can stay home.')
}

const canCode = true
const yearsExperience = 23

if(canCode && yearsExperience > 5) {
    console.log('you are hired! ')
}