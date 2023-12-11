import {useEffect, useRef} from "react";
import canvas from ""

// type capProps = {
//   randomNumber: string,
//   type: 'easy' | 'normal' | 'hard',
//   width: number,
//   height: number
// }

function Captcha({randomNumber, type, width, height}) {
  console.log(randomNumber, type, width, height)

  const canvasRef = useRef(null);

  const colors_easy = ["#bce695", "#fbd4d4", "#eae7a9", "#b2f5e5", "#eee"]
  const colors_normal = ["#6f6f6f", "#b8b8b8", "#fff3a3", "#b2f5e5", "#eee"]
  const colors_hard = ["#000000", "#373737", "#eae7a9", "#b8b8b8", "#eee"]

  const captcha_init = () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // @ts-ignore
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw circles in the background
      for (let i = 0; i < randomNumber.length * 3; i++) {
        const radius = Math.random() * 10 + 2;
        const x = Math.random() * width;
        const y = Math.random() * height;

        // Draw colored border
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = type == 'easy' ? colors_easy[i % 4] : (type== 'normal' ? colors_normal[i % 4] : colors_hard[i % 4]);
        ctx.lineWidth = 6; // Adjust border width as needed
        ctx.stroke();

        // Draw white circle
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      ctx.font = '30px Arial';
      ctx.fillStyle = 'black';
      ctx.fontWeight = 'Bold';

      for (let i = 0; i < randomNumber.length; i++) {
        const x = i * 24 + 12 * Math.random() + 6;
        const y = 12 * Math.random() + 24;

        ctx.fillText(randomNumber.split('')[i], x, y);
      }
    }
    catch (ex) {
      console.log('Error occurred while building canvas : ', ex)
    }
  }

  useEffect(() => {
    captcha_init();
  }, [])

  return (
      <div>
        <canvas ref={canvasRef} width={width} height={height}/>
      </div>
  );
}

export default Captcha;
