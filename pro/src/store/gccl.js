const gccl =(gc)=>{
	let gcarr =gc.split("[");
		var gccp = {}
		for(let j = 0 ;j<gcarr.length;j++){
			let lstime =  (gcarr[j].split("]")[0].split(":")[0]*60)+Math.round(gcarr[j].split("]")[0].split(":")[1]*1);
			let lsword =  gcarr[j].split("]")[1];
			gccp[lstime]=lsword
		}
		delete(gccp['NaN'])
		return gccp
}
export default gccl
