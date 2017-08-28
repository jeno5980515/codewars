var dp = [0,1,1] ;
for ( var i = 3 ; i < 100 ; i ++ ){
  dp[i] = dp[i-1] + dp[i-2] ;
}
var fibonacci = function(n) {
    return dp[n];
}