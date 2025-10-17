import { Trash2 } from "lucide-react";

interface HistoryItem {
  expression: string;
  result: string;
}

interface HistoryProps {
  history: HistoryItem[];
  onUseItem: (result: string) => void;
  onClear: () => void;
}

export default function History({ history, onUseItem, onClear }: HistoryProps) {
  return (
    <div className='bg-card rounded-2xl shadow-lg p-6 border border-border'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold text-foreground'>History</h2>
        <button
          onClick={onClear}
          className='p-2 hover:bg-muted rounded-lg transition-colors'
          title='Clear history'>
          <Trash2 className='w-4 h-4 text-muted-foreground' />
        </button>
      </div>
      <div className='space-y-2 max-h-48 overflow-y-auto'>
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => onUseItem(item.result)}
            className='w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors group'>
            <div className='text-sm text-muted-foreground group-hover:text-foreground/70'>
              {item.expression}
            </div>
            <div className='text-lg font-semibold text-foreground'>
              {item.result}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
