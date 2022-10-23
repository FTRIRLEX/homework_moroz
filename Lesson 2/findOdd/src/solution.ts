export const findOdd = (Arr: number[]) => {
    const count = (arr: number[], val: number) => arr.filter((item: number) => item === val).length;
    let result = 0;
    Arr.forEach((arrnum: number) => {
        if (count(Arr, arrnum) % 2 !== 0) {
            result = arrnum;
        }
    });
    return result;
}

export const revrot = (str: string, sz: number) => {
   const ln = str.length;
   if(sz < 1 || !str || sz > ln) return "";

   const test = (s: string) => (Array as any).prototype.reduce.call(s, (acc: number, val: number) => acc + Number(val) ** 3, 0) % 2 === 0;
   const reverse = (s: string) => s.split("").reverse().join("");
   const rotate = (s: string) => s.slice(1) + s.slice(0, 1);

   let arr = [];
   for(let i = 0; i < ln; i += sz) arr.push(i+sz <= ln ? str.slice(i, i+sz) : "")
   return arr.map(str => test(str) ? reverse(str) : rotate(str)).join("");
}