import './base.css';

export function Button ({onClick, status})  
{
    return (
        <button onClick={onClick} className={`${status=='increment' ? 'add' : 'dec'}`} >
            {
                status == 'increment' ? (
                    <span>+</span>
                ):
                (
                    <span>-</span>
                )
                
            }
        </button>
    )
}