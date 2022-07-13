declare module '*.png'
declare module '*.ico'
declare module '*.svg' {
  const content: string
  export default content
}
