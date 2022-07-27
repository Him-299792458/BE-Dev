process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) { start(chunk) });

function start(chunk){
		
		var chunks = chunk.toString().split('\n');
		maxcount = chunks.shift();
		chunks = chunks.filter(function(e){return e}); 
		
		chunks.forEach(function(val,index){ 
				if(maxcount>0){
				solveProblem(val);
				
				}
			
			if(maxcount-1>0){process.stdin.destroy();}
			maxcount--;
			});
		
}

function solveProblem(numba){
//solution = solution.toString();
let sol=findMark(numba)

process.stdout.write(sol+"\n")
}
// your code goes here

function findMark(input){
    let s1=Number(input.split(' ')[0])
    let s2=Number(input.split(' ')[1])
    s1=Math.floor(s1/10)
    return (s1*s2).toString()
}