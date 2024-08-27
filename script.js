const lecture = document.querySelector("#lecture");
    const absent = document.querySelector("#absent");
    const oaa = document.querySelector("#oaa");
    const form = document.querySelector("form");
    const successMessage = document.querySelector('.success');
    const resultDiv = document.querySelector('.result');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Calculate the result
      const totalLectures = parseInt(lecture.value);
      const absentLectures = parseInt(absent.value);
      const officialActivities = parseInt(oaa.value);

      if (totalLectures && absentLectures >= 0 && officialActivities >= 0) {
        const attendance = 100 - (((absentLectures - officialActivities) / totalLectures) * 100);
        
        // Display success message and result
        successMessage.style.display = "block";
        resultDiv.style.display = "block";
        resultDiv.textContent = `Your attendance percentage is: ${attendance.toFixed(2)}%`;

        // Hide the form
        form.style.display = "none";
      }
    });