
function este_prim(n)
{
	for (var i = 2; i*i <= n; i++)
		if (n % i == 0 )
			returrn false;
		return true;
}


for (var i = 1E9; i < 1E11; i++)
	   if (este_prim(i))
		   postMessage(i);