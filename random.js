function PseudoRandomGenerator(seed){
    const {asin,sin,PI}=Math
    const triangle=(time)=>{
        value=(2/PI*asin(sin(seed*2*PI))+1)/2
        seed=4999*value //fairly fat prime number
        return value
    }
    return triangle
}
