import { motion } from 'motion/react'

export default function TokenTooltip({ tokens, top, left, width }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top,
        left,
        width,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      className="bg-stone-900 text-white rounded-lg shadow-lg px-3 py-2"
    >
      <table className="w-full text-xs font-mono border-separate border-spacing-y-0.5">
        <tbody>
          {tokens.map(({ name, value }) => (
            <tr key={name}>
              <td className="text-stone-400 pr-3 whitespace-nowrap">{name}</td>
              <td className="text-white whitespace-nowrap">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
