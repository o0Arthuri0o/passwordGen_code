import { FaRegCopy } from "react-icons/fa";

type DisplayProps = {
  passwordDisplay: string
}

const Display = ({passwordDisplay}: DisplayProps) => {

  async function copyContent(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
  }
  return (
    <div className='display'>
        <p className={!passwordDisplay? 'display-text' :'display-text-active'}>{passwordDisplay? passwordDisplay : 'PTx1f5DaFX'}</p>
        <FaRegCopy  onClick={()=>copyContent(passwordDisplay)} className='copy-ico' />
    </div>
  )
}

export default Display