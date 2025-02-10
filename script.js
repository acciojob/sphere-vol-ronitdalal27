function volume_sphere() {
    //Write your code here
	 let radiusInput = document.getElementById("radius").value;
    let volumeOutput = document.getElementById("volume");

    let radius = parseFloat(radiusInput);

    // Validate input: Ensure the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    // Calculate volume using the formula: V = (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to four decimal places
    volumeOutput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
