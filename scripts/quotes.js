function random_imglink(){
var quote=new Array()
quote[1]="Gone hunting"
quote[2]="Feared by Queens. Beloved by Bishops."
quote[3]="-- REDACTED --"
quote[4]="Always moving forward"
quote[5]="Death is a friend of ours; and he that is not ready to entertain him is not at home."
quote[6]="You call it used, we call it well-loved."
quote[7]="Protect. Hope. Trust. Persevere"
quote[8]="True power is demonstrated with subtle application"
quote[10]="Eventually you need to step outside of your mentor's shadow"
quote[11]="Yatta!"
quote[12]="Is there an echo in here?"
quote[13]="Automatic. Systematic. Hydromatic."
quote[14]="Rebuilding only comes in the wake of destruction"
quote[15]="The perfect thing for a hot summer's day"
quote[18]="The great equalizer"
quote[19]="Remember your training"
quote[20]="Kings are just men... and no man should be worshipped"
quote[21]="Make some outlines of your own"
quote[22]="It's rude to stare, but war isn't the time for pleasantries"
quote[23]="Never take victory for granted"
quote[24]="Information is never free"
quote[25]="Peek behind the curtain"
quote[26]="Stand out from the crowd"
quote[27]="Take a second look"
quote[28]="Required power supply sold separately"
quote[29]="Lead with your head, even if it means ignoring your heart"
quote[30]="Face off and release the doves"
quote[31]="Brick by Brick"
quote[32]="Safety first"
quote[33]="Fully Mesmerized"
quote[33]="An Amoral Substance"

var ry=Math.floor(Math.random()*quote.length)
if (ry==0)
ry=1
document.write(''+quote[ry]+'')
}
random_imglink()
