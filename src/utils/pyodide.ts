/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// pyodide.ts

let pyodideReadyPromise: Promise<any> | null = null;

export const loadPyodide = (): Promise<any> => {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = new Promise<any>((resolve, reject) => {
      const checkPyodideLoaded = () => {
        if ((window as any).languagePluginLoader) {
          resolve((window as any).pyodide);
        } else {
          setTimeout(checkPyodideLoaded, 100); // Check again after 100ms
        }
      };
      checkPyodideLoaded();
    });
  }
  return pyodideReadyPromise;
};

export const runPythonCode = async (code: string): Promise<string> => {
  await loadPyodide();
  const pyodide = (window as any).pyodide;
  pyodide.globals.set("output", "");
  pyodide.runPython(code);
  const output: string = pyodide.globals.get("output");
  return output;
};
