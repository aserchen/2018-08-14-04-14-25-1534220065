module.exports = function main(str) {
    console.log("Debug Info");
	var symb=  [['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
				['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
				['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']];
	var reslut=''
	for(var j=0;j<3;j++){ 
		for(var i=0;i<str.length;i++){
			reslut += symb[j][parseInt(str.charAt(i))];
			if(i!=str.length-1){
				reslut += ' ';
			}
		}
		reslut += '\n';
	}
    return reslut;
};