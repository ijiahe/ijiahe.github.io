saying=[
'The More We Learn The Less We Know', 
'音无结弦之时 立于浮华之世', 
'Stay Hungry Stay Foolish', 
'听说樱花飘落的速度是秒速五厘米哦',
'嗨 海绵宝宝 我们去抓水母吧',
'秋深し 情けは人の ためならず',
'我秃了 我也变强了',
'天将降大任于斯人也'
];
ran=Math.floor(Math.random()*saying.length);
function dictum(){
    document.write(saying[ran]);
};