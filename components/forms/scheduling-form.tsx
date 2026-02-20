"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
    whatsapp: z.string().min(10, { message: "Número de WhatsApp inválido." }),
    style: z.string().min(1, { message: "Selecione um estilo de tatuagem." }),
    placement: z.string().min(2, { message: "Informe o local do corpo." }),
    size: z.string().min(1, { message: "Selecione um tamanho aproximado." }),
    description: z.string().optional(),
    reference: z.any().optional(),
});

export function SchedulingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            whatsapp: "",
            style: "",
            placement: "",
            size: "",
            description: "",
            reference: undefined,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const message = `*Novo Pedido de Agendamento/Orçamento*%0A%0A` +
            `*Nome:* ${values.name}%0A` +
            `*WhatsApp:* ${values.whatsapp}%0A` +
            `*Estilo:* ${values.style}%0A` +
            `*Local:* ${values.placement}%0A` +
            `*Tamanho:* ${values.size}%0A` +
            `*Observações:* ${values.description || "Nenhuma"}%0A` +
            `*Possui Referência:* ${values.reference && values.reference.length > 0 ? "Sim (Anexar após enviar)" : "Não"}`;

        window.open(`https://wa.me/5511951321091?text=${message}`, "_blank");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-muted/30 p-8 rounded-xl border border-white/5 shadow-inner">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                                <Input placeholder="Seu nome" {...field} className="bg-background/50 border-white/10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>WhatsApp (com DDD)</FormLabel>
                            <FormControl>
                                <Input placeholder="(11) 99999-9999" {...field} className="bg-background/50 border-white/10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="style"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estilo Desejado</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background/50 border-white/10">
                                            <SelectValue placeholder="Selecione..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Aquarela">Aquarela</SelectItem>
                                        <SelectItem value="Blackwork">Blackwork</SelectItem>
                                        <SelectItem value="Comics">Comics</SelectItem>
                                        <SelectItem value="Cover Up">Cover Up</SelectItem>
                                        <SelectItem value="Escrita">Escrita</SelectItem>
                                        <SelectItem value="Fine Line">Fine Line</SelectItem>
                                        <SelectItem value="Glitter">Glitter</SelectItem>
                                        <SelectItem value="Minimalista">Minimalista</SelectItem>
                                        <SelectItem value="Old School">Old School</SelectItem>
                                        <SelectItem value="Realismo">Realismo</SelectItem>
                                        <SelectItem value="Outro">Outro</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tamanho Aproximado</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background/50 border-white/10">
                                            <SelectValue placeholder="Selecione..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Pequena (até 7cm)">Pequena (até 7cm)</SelectItem>
                                        <SelectItem value="Média (8cm a 15cm)">Média (8cm a 15cm)</SelectItem>
                                        <SelectItem value="Grande (acima de 15cm)">Grande (acima de 15cm)</SelectItem>
                                        <SelectItem value="Fechamento">Fechamento</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="placement"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Local do Corpo</FormLabel>
                            <FormControl>
                                <Input placeholder="Ex: Antebraço, Costela, Perna..." {...field} className="bg-background/50 border-white/10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ideia / Detalhes (Opcional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Descreva brevemente sua ideia ou elementos que gostaria de incluir."
                                    className="resize-none bg-background/50 border-white/10 min-h-[100px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="reference"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                        <FormItem>
                            <FormLabel>Foto de Referência (Opcional)</FormLabel>
                            <FormControl>
                                <div className="space-y-3">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        className="bg-background/50 border-white/10 cursor-pointer file:text-primary"
                                        onChange={(event) => onChange(event.target.files)}
                                        {...fieldProps}
                                    />
                                    <p className="text-sm text-primary/80 italic font-medium leading-relaxed">
                                        <i className="bi bi-info-circle mr-2"></i>
                                        Sim, fazemos coberturas. Envie uma foto da tatuagem atual no campo de referência para avaliarmos a possibilidade.
                                    </p>
                                    <FormDescription className="text-xs text-muted-foreground">
                                        Como o envio é via WhatsApp, lembre-se de anexar a foto na conversa após clicar em enviar.
                                    </FormDescription>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-12">
                    <i className="bi bi-whatsapp mr-2"></i>
                    Enviar Solicitação
                </Button>
            </form>
        </Form>
    );
}
