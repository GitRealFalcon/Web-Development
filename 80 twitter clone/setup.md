## How To Setup Tailwind CSS

Step 1: Run the following Command

```
npm i -D tailwindcss@3
npx tailwindcss init
```
Step 2: Update tailwind.config.js file to include this line:

```
content: ["*.html"],
 ```

Step 3: Create src/input.css to include

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Step 4: Include the src/output.css file to your html

Step 5: Run the following command

```
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```