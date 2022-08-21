import { seedWidgets } from './data';
import { WidgetProps } from './types';
import { Context } from '.keystone/types';


export async function insertSeedData(context: Context) {
  console.log(`🌱 Inserting seed data`);

  const createTask = async (widgetData: WidgetProps) => {
    let persons = await context.query.Widget.findMany({
      where: { canonicalId: { equals: widgetData.canonicalId } },
      query: 'id',
    });

    await context.query.Widget.createOne({
      data: { ...widgetData },
      query: 'id',
    });
  };

  for (const widget of seedWidgets) {
    console.log(`🔘 Adding widget: ${widget.canonicalId}`);
    await createTask(widget);
  }

  console.log(`✅ Seed data inserted`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
